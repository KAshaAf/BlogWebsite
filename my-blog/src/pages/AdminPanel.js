import React, { useState } from "react";
import '../styles/admin.css';
import blogs from '../data/blogs';

function AdminPanel() {
    const [blogData, setBlogData] = useState({
        id: blogs.length + 1,
        thumbnail: '',
        title: '',
        content: '',
        category: '',
        date: new Date().toLocaleDateString(),
        author: '', // you can default this or let it be set
        media: [],
        tags: '',
        bio: '',
    });

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'featuredImage') {
            setBlogData({
                ...blogData,
                thumbnail: files[0] // Handle file input for the thumbnail
            });
        } else if (name === 'galleryImages') {
            setBlogData({
                ...blogData,
                media: Array.from(files) // Handle multiple file uploads for the media gallery
            });
        } else {
            setBlogData({
                ...blogData,
                [name]: value // Handle regular text inputs
            });
        }
    };

    const handleClick = (e) => {
        e.preventDefault();

        // Add the new blog to the blogs array (this is just for demonstration)
        blogs.push(blogData);
        console.log("Blog uploaded: ", blogData);

        // Optionally reset the form after submission
        setBlogData({
            id: blogs.length + 1,
            thumbnail: '',
            title: '',
            content: '',
            category: '',
            date: new Date().toLocaleDateString(),
            author: '',
            media: [],
            tags: '',
            bio: '',
        });
    };

    return (
        <div className="admin-panel">
            <h1>Upload a New Blog</h1>
            <form id="blogForm">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={blogData.title} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <input type="text" id="bio" name="bio" value={blogData.bio} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input type="text" id="category" name="category" value={blogData.category} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="tags">Tags</label>
                    <input type="text" id="tags" name="tags" value={blogData.tags} onChange={handleInputChange} placeholder="Comma separated" required />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" name="content" value={blogData.content} onChange={handleInputChange} rows="10" required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="featuredImage">Featured Image</label>
                    <input type="file" id="featuredImage" name="featuredImage" accept="image/*" onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="galleryImages">Media Gallery Images</label>
                    <input type="file" id="galleryImages" name="galleryImages" accept="image/*" multiple onChange={handleInputChange} />
                </div>
                <button type="button" className="upload-blog" onClick={handleClick}>Upload Blog</button>
            </form>
        </div>
    );
}

export default AdminPanel;
