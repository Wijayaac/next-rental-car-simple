import request, { gql } from 'graphql-request'

const MASTER_URL = 'https://api-ap-northeast-1.hygraph.com/v2/clq4f8dvi25b701t89w4u3cw3/master'

export const getCarsList = async () => {
	const query = gql`
		query CarLists {
            carLists {
                carAvg
                createdAt
                id
                name
                price
                publishedAt
                updatedAt
                carType
                carBrand
                image {
                    url
                }
            }
		}
	`

	const data = await request(MASTER_URL, query)
	return data
}