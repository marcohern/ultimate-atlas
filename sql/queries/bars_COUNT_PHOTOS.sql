CREATE TABLE __bar_photocount (
	id INT,
    qty INT
)ENGINE=MEMORY;

INSERT INTO __bar_photocount
SELECT b.id, COUNT(i.id)
FROM bars b
INNER JOIN images i ON i.domain = 'bar' AND i.slug = b.slug AND i.profile = 'original' AND i.density = 'original'
GROUP BY b.id;

UPDATE bars b SET b.photos = IFNULL((SELECT pc.qty FROM __bar_photocount pc WHERE pc.id = b.id),0);

DROP TABLE __bar_photocount;
