interface TagProps {
    status: string | undefined
}

const Tag: React.FC<TagProps> = ({ status }) => {
    let displayStatus = ''
    let bgColor = ''

    switch (status) {
        case 'delivered':
            displayStatus = 'ENTREGADO'
            bgColor = 'bg-customGreen'
            break
        case 'pending':
            displayStatus = 'PENDIENTE'
            bgColor = 'bg-customPurple'
            break
        case 'in progress':
            displayStatus = 'EN CURSO'
            bgColor = 'bg-customYellow'
            break
        default:
            break
    }

    return (
        <div
            className={`${bgColor} rounded-xl text-xs font-bold px-2 py-1 w-20 flex items-center justify-center text-center uppercase text-primary`}
        >
            {displayStatus}
        </div>
    )
}

export default Tag
