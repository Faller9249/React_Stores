import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { add } from '../../store/modules/cart/action';


export default function GrowCard(props){
    const dispatch = useDispatch();

    function addCart(){
        dispatch(add({
            nome: props.tier.title,
            preco: props.tier.price,
        }));
    }

    return (
        <Grid item key={props.tier.title} xs={12} sm={props.tier.title === 'Enterprise' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={props.tier.title}
                                    subheader={props.tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    action={props.tier.title === 'Pro' ? <StarIcon /> : null}
                                    className={props.classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={props.classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            ${props.tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary">/mês</Typography>
                                    </div>
                                    <ul>
                                        {props.tier.description.map((line) => (
                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button fullWidth 
                                        variant={props.tier.buttonVariant} 
                                        color="primary"
                                        onClick={addCart}
                                    >
                                        {props.tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
    )
}