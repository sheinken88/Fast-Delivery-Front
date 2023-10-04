import type PackageInfo from '../packageInfo.interface'

export default interface PackageSelectProps {
    packageInfo: PackageInfo
    order: number | null
    onSelect: (isSelected: boolean) => void
}
