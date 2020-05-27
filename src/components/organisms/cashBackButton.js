import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Slide, Grid } from '@material-ui/core';
import { useCart, CartContext } from '../../context/cartContext';
import PikachuFace from '../../assets/images/pikachu-face.png'

const useStyles = makeStyles((theme) => ({
    dialogContainer: {
        background: '#f4cd17',
        textAlign: 'center',
    },
    buyButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        textAlign: 'center',
        height: '50px',
        borderRadius: 0,
    },
    pikachuFaceContainer: {
        padding: "20px 25px 10px"
    },
    PikachuFaceImage: {
        width: "40%"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [cashBack, setCashBack] = useState(0);
    const { setCartList } = useCart(CartContext);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCartList([]);
    };

    // Calcula valor extornado (CashBack)
    const calcCashBack = async () => {
        var preco = props.resumeBuy;
        //var porcentagem = parseFloat('1.3') ;
        var porcentagem = 3;
        setCashBack(preco * (porcentagem / 100));
    }
    useEffect(() => {
        calcCashBack()
    }, [props.resumeBuy]);

    return (
        <div>
            {props.resumeBuy ?
                <Button onClick={handleClickOpen} variant="contained" className={classes.buyButton} color="primary" >
                    Finalizar
                </Button>
                :
                <Button disabled onClick={handleClickOpen} variant="contained" className={classes.buyButton} color="primary" >
                    Finalizar
                </Button>
            }

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                
            >
                <div className={classes.dialogContainer}>
                    <Grid container className={classes.pikachuFaceContainer} direction="row" justify="center" alignItems="center">
                        <Grid item >
                            <img src={PikachuFace} alt="PokeStore" className={classes.PikachuFaceImage} />
                        </Grid>
                    </Grid>
                    <DialogTitle id="alert-dialog-slide-title">
                        {`Obrigado !!!`}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            {`Voce ganhou de volta R$ ${cashBack}`}
                        </DialogContentText>
                    </DialogContent>
                    </div>
            </Dialog>
        </div>
    );
}