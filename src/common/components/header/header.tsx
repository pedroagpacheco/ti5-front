interface Props {
  title: string
}

const Header = ({ title }: Props) => (
  <div className="py-1.5 w-full bg-blue-900 text-3xl mb-2 justify-center flex">
    {title}
  </div>
)

export default Header
