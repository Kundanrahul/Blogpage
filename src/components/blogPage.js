import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';
import './blogPage.css';

const firebaseConfig = {
  apiKey: "AIzaSyA4Blk4K-IVVdOq11Fy0agnxEwP7cxQo1A",
  authDomain: "blog-99732.firebaseapp.com",
  projectId: "blog-99732",
  storageBucket: "blog-99732.appspot.com",
  messagingSenderId: "16448438680",
  appId: "1:16448438680:web:7707c8a88d4ae847f16bed"
};

initializeApp(firebaseConfig);

const db = getFirestore();

function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    imageUrl: '',
  });

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'blogPosts'), (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      setBlogPosts(data);
    });

    return unsubscribe;
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDoc(collection(db, 'blogPosts'), {
      ...newPost,
      createdAt: new Date(),
    });
    setNewPost({ title: '', content: '', imageUrl: '' });
  };

  
    return (
      <>
      <div className='headingh'>
        <h2>Featured explore</h2>
        </div>
        <div className="blog-container">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.createdAt}>
              {post.imageUrl && (
                <img className="blog-image" src={post.imageUrl} alt={post.title} />
              )}
              <div className="blog-content">
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-post-content">{post.content}</p>
              </div>
            </div>
          ))
          }
        </div>
        </>
      );
}

export default BlogPage;

