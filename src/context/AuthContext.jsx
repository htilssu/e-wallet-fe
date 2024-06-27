import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'


const Context = createContext({})
export const useAuth = () => useContext(Context)
export const AuthProvider = props => {
    const [user, setUser] = useState(null)
    return (
            <Context.Provider value={{ user, setUser }}>
                {props.children}
            </Context.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
