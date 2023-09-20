import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import LoginPage from '../../../app/(pages)/login/page'
import '@testing-library/jest-dom'
import { store } from '../../../src/store/store'
// import mockRouter from 'next-router-mock'

jest.mock('next/router', () => jest.requireActual('next-router-mock'))

describe('Login page', () => {
    it('should render properly', () => {
        // mockRouter.push('/home')

        const { container } = render(
            <Provider store={store}>
                <LoginPage />
            </Provider>
        )

        expect(container).toBeInTheDocument()

        expect(typeof LoginPage).toBe('function')
    })
})
