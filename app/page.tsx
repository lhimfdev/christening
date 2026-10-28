import CurtainMusic from "@/components/invitation/CurtainMusic";
import RevealObserver from "@/components/invitation/RevealObserver";
import HeroSection from "@/components/invitation/HeroSection";
import InvitationMessage from "@/components/invitation/InvitationMessage";
import BabyPhotos from "@/components/invitation/BabyPhotos";
import FamilyPhoto from "@/components/invitation/FamilyPhoto";
import EventDetails from "@/components/invitation/EventDetails";
import EventSchedule from "@/components/invitation/EventSchedule";
import Godparents from "@/components/invitation/Godparents";
import RSVPForm from "@/components/invitation/RSVPForm";
import ClosingSection from "@/components/invitation/ClosingSection";

export default function Page() {
  return (
    <>
      <CurtainMusic />
      <HeroSection />
      <InvitationMessage />
      <BabyPhotos />
      <FamilyPhoto />
      <EventDetails />
      <EventSchedule />
      <Godparents />
      <RSVPForm />
      <ClosingSection />
      <RevealObserver />
    </>
  );
}
