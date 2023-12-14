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

export const createBooking = async (formValue: any) => {
	const mutationQuery = gql`
		mutation CreateBooking {
			createBooking(data: {
				pickupDate: "`+ formValue.pickUpDate + `", 
        pickupTime: "`+ formValue.pickUpTime + `", 
        dropOffDate: "`+ formValue.dropOffDate + `", 
        dropOffTime: "`+ formValue.dropOffTime + `", 
        contactNumber: "`+ formValue.contactNumber + `", 
        carId: {connect: {id: "`+ formValue.carId + `"}}}
			)
			{
				id
			}
		}
	`

	const result = await request(MASTER_URL, mutationQuery)
	return result
}