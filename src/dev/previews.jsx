import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import App from '../App.jsx'
import LoginForm from '../components/auth/LoginForm.jsx'
import Footer from '../components/footer/Footer.jsx';

const ComponentPreviews = () => {
    return (
            <Previews palette={<PaletteTree/>}>
                <ComponentPreview path="/App">
                    <App/>
                </ComponentPreview>
                <ComponentPreview path="/LoginForm">
                    <LoginForm/>
                </ComponentPreview>
              <ComponentPreview path="/Footer">
                <Footer/>
              </ComponentPreview>
              <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews/>
              </ComponentPreview>
            </Previews>
    )
}

export default ComponentPreviews
