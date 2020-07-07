import Link from 'next/link'

const Header = () => {
    return (
        <div>
            <div className='center flexbox-container'>
                <div>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
                <div>
                    <Link href="/information">
                        <a>Information</a>
                    </Link>
                </div>
                <div>
                    <a href="https://www.facebook.com/teerapol.yingsua" target="blank">Facebook</a>
                </div>
                <span className='flexbox-login'>
                    <div>
                        <Link href="/Login">
                            <a>Login</a>
                        </Link>
                    </div>
                </span>
            </div>

        </div>
    )
}

export default Header