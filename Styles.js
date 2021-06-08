import {StyleSheet} from 'react-native'; 

const Styles = StyleSheet.create({
    login_container: {
        flex: 1,
        backgroundColor: '#04260e'
    }, 

    login_header: { 
        alignItems: 'center', 
        paddingTop: 30,
        paddingBottomg: 50,
        backgroundColor: '#04260e'
    }, 
    login_header_logo: { 
        width: 220, 
        resizeMode: 'contain',
    }, 
    login_header_text: { 
        marginTop: 15,
        color: '#FFF0',
        fontSize: 16,
    },
    login_header_text_bold: { 
        color: '#fff',
        fontWeight: 'bold',
    },
    login_wrapper: {
        flex: 1, 
        justifyContent: 'space-between', 
        paddingVertical: 40,
        borderTopRightRadius: 12, 
        borderTopLeftRadius: 12,
        marginTop: -10, 
        backgroundColor: '#04303a',
    },
    form: {
        width: '100%',
        maxWidth: 280,
    },
    form_input: {
        height: 44, 
        paddingHorizontal: 20,
        marginBottom: 20, 
        backgroundColor: '#e0d3e2',
        borderRadius: 50,
    }, 
    button: {
        alignItems: 'center', 
        justifyContent: 'center',
        height: 44, 
        backgroundColor: '#757474',
        borderRadius: 50,
    },
    button_label: {
        color: '#fff',
        fontsize: 15,
    }, 
    login_social: {
        width: '100%', 
        maxWidth: 280, 
        marginTop: 20, 
    },
    login_social_separator_line: { 
        flex: 1,
        width: '100%',
        height: 1,
        backgroundColor: '#e0d3e2', 
    }, 
    login_social_buttons: { 
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20, 
    },
    login_social_button: { 
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60, 
        marginHorizontal: 12,
        borderWidth: 1, 
        borderColor: '#757474',
        borderRadius: 60,
    },
    login_social_icon: {
        width: 38,
        height: 38, 
        resizeMode: 'contain',
    },
    login_social_facebook: {
        backgroundColor: '#0f772e', 
        borderColor: '#757474',
    }, 
    login_footer_text: {
        flexDirection: 'row',
        alignItems: 'center', 
        color: '#e0d3e2',
        fontSize: 15,
    },
    login_footer_link: {
        color: '#e0d3e2',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default Styles;