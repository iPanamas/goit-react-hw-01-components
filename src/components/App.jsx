import Container from "./Container/Container";

import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

import Profile from "./Profile/Profile";
import Statistics from './Statistics/Statistics';
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Container>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
      </Container>

      <Container>
        <Statistics title="UPLOAD STATS" stats={data} />
      </Container>

      <Container>
        <FriendList friends={friends} />
      </Container>

      <Container>
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
};

export default App;

