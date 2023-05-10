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

export const GET_ANIMALS = gql`
    query MyQuery($id: String_comparison_exp = {}) {
        animals(where: {id: $id}) {
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

export const ADD_ANIMALS = gql`
    mutation MyMutation($object: animals_insert_input!) {
        insert_animals_one(object: $object) {
        id
        }
    }
`

export const DELETE_ANIMALS = gql`
    mutation MyMutation($id: String!) {
        delete_animals_by_pk(id: $id) {
        id
        }
    }
`