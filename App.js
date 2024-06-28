import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, setSearchTerm } from './store/actions';
import PostList from './components/PostList';
import Search from './components/Search';

const App = () => {
  const dispatch = useDispatch();
  const { posts, searchTerm } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleSearch = (term) => {
    dispatch(setSearchTerm(term));
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.includes(searchTerm) ||
      post.body.includes(searchTerm)
  );

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      <PostList posts={filteredPosts} />
    </div>
  );
};

export default App;
