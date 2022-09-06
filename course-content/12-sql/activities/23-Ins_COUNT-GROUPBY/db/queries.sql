SELECT *
FROM course_names;

-- * is all, name of field where the row has an id value
-- alias the product of COUNT to number_courses by the department 
-- +------------+----------------+
-- | department | number_courses |
-- +------------+----------------+
-- |          1 |              3 |
-- |          2 |              1 |
-- |          3 |              1 |
-- |          4 |              2 |
-- +------------+----------------+
SELECT department, COUNT(id) AS number_courses
FROM course_names
GROUP BY department;

-- +------------+----------------+
-- | department | number_courses |
-- +------------+----------------+
-- |          1 |              3 |
-- |          2 |              1 |
-- |          3 |              1 |
-- |          4 |              2 |
-- +------------+----------------+


SELECT department, SUM(total_enrolled) AS sum_enrolled
FROM course_names
GROUP BY department;




-- * is all, name of field where the row has a total_enrolled value
-- alias the product of COUNT to sum_enrolled by the department 
-- +------------+--------------+
-- | department | sum_enrolled |
-- +------------+--------------+
-- |          1 |          124 |
-- |          2 |           40 |
-- |          3 |           11 |
-- |          4 |           57 |
-- +------------+--------------+


SELECT department, SUM(total_enrolled)
FROM course_names
GROUP BY department;

-- +------------+---------------------+
-- | department | SUM(total_enrolled) |
-- +------------+---------------------+
-- |          1 |                 124 |
-- |          2 |                  40 |
-- |          3 |                  11 |
-- |          4 |                  57 |
-- +------------+---------------------+

SELECT department, SUM(total_enrolled) AS farley
FROM course_names
GROUP BY department;

-- +------------+--------+
-- | department | farley |
-- +------------+--------+
-- |          1 |    124 |
-- |          2 |     40 |
-- |          3 |     11 |
-- |          4 |     57 |
-- +------------+--------+



