// import './botao.css';
import { useRef } from 'react';
import { useButton } from '@react-aria/button';
import { usePress } from '@react-aria/interactions';



const Botao = (props) => {
    const {fontScale} = props;

    var ref = useRef();
    var { pressProps} = usePress({ ...props, elementType: 'div' }, ref);
    function Button(props) {
        var { children } = props;

        var { buttonProps} = useButton(
            { ...props, elementType: 'span' }, ref);

        return (
            <span
                {...buttonProps}
                className="estilo-botao"
                ref={ref}>
                {children}
            </span>
        );
    }
    return (
        <div>

            <div
                {...pressProps}
               
                role="button"
                tabIndex={0} >
                
                    <Button
                        style={{width:fontScale}}
                        onPress={() => props.handleClick()}
                    >
                        {props.title}
                    </Button>
               
            </div >


        </div>

        
    )

}

export default Botao;