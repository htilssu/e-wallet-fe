import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import App from '../App.jsx'
import InforPopup from '../components/topup/InforPopup.jsx'
import LoginForm from '../components/auth/LoginForm.jsx'

const ComponentPreviews = () => {
    return (
            <Previews palette={<PaletteTree/>}>
                <ComponentPreview path="/App">
                    <App/>
                </ComponentPreview>
                <ComponentPreview path="/InforPopup">
                    <InforPopup/>
                </ComponentPreview>
                <ComponentPreview path="/LoginForm">
                    <LoginForm/>
                </ComponentPreview>
            </Previews>
    )
}

export default ComponentPreviews
