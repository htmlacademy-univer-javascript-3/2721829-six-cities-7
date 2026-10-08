import { useState } from "react"
import { type Offer } from "../../mocks/offer"
import OfferCard from "../OfferCard/OfferCard"

type OffersListProps = {
    offers: Offer[]
}

const OffersList = ({ offers }: OffersListProps ) => {
    const [activeOffer, setActiveOffer] = useState<Offer>()

    return (
        <>
            {
                offers ? (
                    offers.map(offer => (
                        <OfferCard offer={offer}/>
                    ))
                ) : <div>Предложения не найдены</div>
            }
        </>
    )
}

export default OffersList