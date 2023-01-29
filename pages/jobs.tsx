import { JobsType } from '@/types/jobs'
import { InferGetServerSidePropsType } from 'next'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { CardMedia, Container, CssBaseline, Grid, Stack } from '@mui/material';

import styled from '@emotion/styled'
let CustomizedCard = styled(Card)({
    height: '100%',
})

let CustomizedCardMedia = styled(CardMedia)({
    backgroundSize: 'contain',
})



export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/jobs/')
    const data: JobsType[] = await res.json()

    return {
        props: {
            data,
        },
    }
}

function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <Container>
            <Stack
                direction="row"
                justifyContent="flex-end"
                mb={3}
            >
                <Button component={Link} href="jobs/add" variant="contained">Add Job</Button>
            </Stack>
            <Grid container spacing={2}>
                {data.map(item => (
                    <Grid item xs={12} md={4}>
                        <CustomizedCard key={item.id}>
                            <CustomizedCardMedia
                                sx={{ height: 140 }}
                                image={item.logo}
                                title={item.comp_name}
                            />
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {item.name}
                                </Typography>
                                <Typography gutterBottom color="text.secondary" variant="subtitle1" component="h3">
                                    {item.comp_name}
                                </Typography>
                                <Typography noWrap  >
                                    {item.detail}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button component={Link} href={`jobs/${item.id}`} size="small">View More</Button>
                            </CardActions>
                        </CustomizedCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Page