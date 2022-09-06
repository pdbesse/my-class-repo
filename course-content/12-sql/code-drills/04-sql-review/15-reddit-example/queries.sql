-- 1. Get all subreddits
SELECT * FROM SUBREDDIT;

-- 2. Get all posts posted by a user 
-- Given user's id
SELECT TITLE FROM POST WHERE USERID = 1;
-- Given user's name
SELECT POST.TITLE FROM POST JOIN USER 
ON POST.USERID = USER.ID 
WHERE USER.NAME = "BUBBLES";

-- 3. Get all posts within a subreddit
-- Given subreddit id
SELECT TITLE FROM POST WHERE SUBID = 3;
-- Given subreddit name
SELECT POST.TEXT FROM POST JOIN SUBREDDIT 
ON POST.SUBID = SUBREDDIT.ID
WHERE SUBREDDIT.NAME = "videos";

-- 4. Get all comments associated with a particular post
-- Given post id
SELECT VALUE FROM COMMENT WHERE POSTID = 1;
-- Given post name
SELECT COMMENT.VALUE FROM COMMENT JOIN POST 
ON COMMENT.POSTID = POST.ID
WHERE POST.TEXT = "BABABABABAB";

-- 5. All votes belonging to a specific post
-- Given post-id
SELECT VALUE FROM VOTE WHERE POSTID = 2;
-- Given post name
SELECT VOTE.VALUE FROM VOTE JOIN POST ON VOTE.POSTID = POST.ID
WHERE POST.TEXT = "Top frontend Framework";

-- 6. All comments and posts belonging to a user
-- SQL aliases are used to give a table, or a column in a table, a temporary name.
-- Aliases are often used to make column names more readable.
-- An alias only exists for the duration of that query.
-- An alias is created with the AS keyword.
-- https://www.w3schools.com/sql/sql_alias.asp
SELECT POST.TEXT as POST, COMMENT.VALUE as COMMENT 
FROM POST JOIN COMMENT 
ON POST.USERID = COMMENT.USERID AND POST.ID = COMMENT.POSTID
WHERE POST.USERID = 5;

-- 7. Get name of user who posted hilarious video(post-id = 3)
SELECT USER.NAME FROM USER 
JOIN POST ON USER.ID = POST.USERID 
WHERE POST.ID = 3;