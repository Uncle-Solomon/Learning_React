// Using Props
const Profile = (props) => {
  // console.log(props);
  const { name, lastname } = props;
  return (
    <h1>
      Name: {name} {lastname}
    </h1>
  );
};

export default Profile;
