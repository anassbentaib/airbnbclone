
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";

import EmptyState from "@/app/components/EmptyState";

import ListingClient from "./ListingClient";
import ClientOnly from "@/app/components/clientOnly";
import getReservation from "@/app/actions/getReservation";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {

  const listing = await getListingById(params);
  const currentUser = await getCurrentUser();
const reservation = await getReservation(params); 
  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        currentUser={currentUser}
        reservations={reservation}
      />
    </ClientOnly>
  );
}
 
export default ListingPage;