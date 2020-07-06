import Link from 'next/link'

const Header = () => {
    return (
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
            <div>
                <Link href="/Login">
                    <a href="Login">Login</a>
                </Link>
            </div>
        </div>
    )
}




// const style = {
//     backgroundColor: '#4CAF50',
//     border: 'none',
//     color: 'white',
//     padding: '10px 10px',
//     textAlign: 'center',
//     textDecoration: 'none',
//     display: 'inline-block',
//     fontSize: '16px',
//     margin: '4px 2px',
//     cursor: 'pointer',
// }

// const Header = () => (
//     <div className='center flexbox-container'>
//         <div>
//             <Link href="/">
//                 <a>Home</a>
//             </Link>
//         </div>
//         <div>
//             <Link href="/about">
//                 <a>About</a>
//             </Link>
//         </div>
//     </div>
// )


export default Header