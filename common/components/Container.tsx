
type ContainerProps = {
    children: React.ReactNode;
    className?: string;
}

export default function Container({ children, className }: ContainerProps) {
    return (
        <div className={`${className} max-w-[1200px] mx-auto px-8 flex`}>
            {children}
        </div>
    )
}