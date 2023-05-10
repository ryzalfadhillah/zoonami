import { gql } from '@apollo/client'

export const GET_ALL_ANIMALS = gql`
    query MyQuery {
        animals {
        id
        name
        makanan
        lokasi_kandang
        jumlah
        habitat
        deskripsi
        image
        }
    }
`