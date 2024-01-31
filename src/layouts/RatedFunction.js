import { Rating } from "@material-tailwind/react";
function RatedIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14" 
        height="14" 
        viewBox="0 0 14 14" 
        fill="none"
        style={{"cursor":"pointer"}}
      >
        <path d="M7.99991 11.3333L4.08125 13.7267L5.14658 9.25999L1.65991 6.27332L6.23658 5.90666L7.99991 1.66666L9.76325 5.90666L14.3406 6.27332L10.8532 9.25999L11.9186 13.7267L7.99991 11.3333Z" fill="#F79009"/>
      </svg>
    );
  }
   
function UnratedIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14" 
        height="14" 
        viewBox="0 0 14 14" 
        fill="none"
        style={{"cursor":"pointer"}}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.99991 11.3333L4.08125 13.7267L5.14658 9.25999L1.65991 6.27332L6.23658 5.90666L7.99991 1.66666L9.76325 5.90666L14.3406 6.27332L10.8532 9.25999L11.9186 13.7267L7.99991 11.3333Z" fill="#98A2B3"
        />
      </svg>
    );
}
export function CustomRatingIcon() {
    return (
      <Rating
        value={4}
        ratedColor="red"
        ratedIcon={<RatedIcon />}
        unratedIcon={<UnratedIcon />}
      />
    );
}
