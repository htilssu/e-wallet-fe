import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import Navbar from '../Navbar.jsx'
import App from '../App.jsx'

const ComponentPreviews = () => {
    return (
            <Previews palette={<PaletteTree/>}>
                <ComponentPreview path="/Navbar">
                    <Navbar/>
                </ComponentPreview>
                <ComponentPreview path="/App">
                    <App/>
                </ComponentPreview>
            </Previews>
    )
}

export default ComponentPreviews