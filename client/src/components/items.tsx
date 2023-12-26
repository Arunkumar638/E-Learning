export const CourseItems = ({ blog }: any) => {
    console.log(blog)
  return (
    <div className="single-blog-item">
      <a href="/blogdetails">
        <img src="assets/images/blog/blog-1.jpg" alt="Image" />
      </a>
      <div className="blog-content">
        <ul className="d-flex justify-content-between">
          <li>
            <a href="/blog">
              <i className="ri-user-line" />
              <span>{blog.usertype}</span>
            </a>
          </li>
          <li>
            <i className="ri-time-fill" />
            <span>{blog.date}</span>
          </li>
          <li>
            <i className="ri-eye-fill" />
            <span>{blog.views} Views</span>
          </li>
        </ul>
        <h3>
          <a href="/blogdetails">
            {blog.title} {/* Replace blog.title with your blog title */}
          </a>
        </h3>
        <a href="/blogdetails" className="read-more">
          More Details
          <i className="ri-arrow-right-line" />
        </a>
      </div>
    </div>
  );
};
