import fs from "fs";
import path from "path";

export function updateMockData(blogId, newComment) {
  const mockDataPath = path.join(process.cwd(), "src", "mockData.json");

  // Read the current mock data
  const mockData = JSON.parse(fs.readFileSync(mockDataPath, "utf8"));

  // Find the blog post and add the new comment
  const blogPost = mockData.find((post) => post.id === parseInt(blogId));
  if (blogPost) {
    if (!blogPost.comments) {
      blogPost.comments = [];
    }
    blogPost.comments.push(newComment);

    // Write the updated data back to the file
    fs.writeFileSync(mockDataPath, JSON.stringify(mockData, null, 2));
  }
}
