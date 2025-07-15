export const getInitials = (name: string) => {
  const nameSplit = name.split(" ");
  const [firstName, lastName] = [nameSplit[0], nameSplit[nameSplit.length - 1]];
  return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
};
