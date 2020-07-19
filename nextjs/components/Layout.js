import Header from './Header'
import Footer from './Footer'

const Layouts = (props) => (
    <div>
        <Header />
        {props.children}
        <Footer />
    </div>
)

export default Layouts