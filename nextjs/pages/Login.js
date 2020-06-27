import Head from 'next/head'

const Foo = () => {
    console.log("Hey You!!");
    return (
        <div>
            <Head>
                <title>Login</title>
                <link rel='icon' href='favicon.ico' />
            </Head>
            <div className='center login-container'>
                <h2>Login</h2>
                <form>
                    <label for="fname">Username:</label>
                    <input type="text" id="fname" name="fname" /><br /><br />
                </form>
                <label for="lname" />Password:
                <input type="password" id="lname" name="lanme" />
            </div>
        </div>
    )
}
export default Foo