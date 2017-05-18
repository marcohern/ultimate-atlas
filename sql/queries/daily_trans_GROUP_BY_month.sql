-- DAY
SELECT LEFT(t.event_date, 7) AS month,
       IFNULL(SUM(t.value)    ,0) AS 'balance',
       
       IFNULL(SUM(tt.value),0)+
       IFNULL(SUM(ft.value),0)+
       IFNULL(SUM(pt.value),0)+
       IFNULL(SUM(st.value),0)+
       IFNULL(SUM(ot.value),0) AS 'sum',
       
       CASE WHEN (
			IFNULL(SUM(tt.value),0)+
			IFNULL(SUM(ft.value),0)+
			IFNULL(SUM(pt.value),0)+
			IFNULL(SUM(st.value),0)+
			IFNULL(SUM(ot.value),0)=
            IFNULL(SUM(t.value),0)) THEN 'yes' ELSE 'NO' END AS 'equal',
       
       IFNULL(SUM(inn.value)  ,0) AS 'in',
       IFNULL(SUM(outt.value) ,0) AS 'out',
       
       IFNULL(SUM(nt.value) ,0) AS 'none',
       IFNULL(SUM(tt.value) ,0) AS 'transport',
       IFNULL(SUM(ft.value) ,0) AS 'food',
       IFNULL(SUM(pt.value) ,0) AS 'purchases',
       IFNULL(SUM(st.value) ,0) AS 'sortie',
       IFNULL(SUM(ot.value) ,0) AS 'other'
FROM daily_trans t
LEFT JOIN daily_cats c ON c.id = t.cat_id
LEFT JOIN daily_trans inn  ON inn.id = t.id AND t.value > 0
LEFT JOIN daily_trans outt ON outt.id = t.id AND t.value < 0

LEFT JOIN daily_cats  nc ON nc.id = c.id AND nc.hypercat = 'NONE'
LEFT JOIN daily_trans nt ON nt.id = t.id AND nt.cat_id = nc.id

LEFT JOIN daily_cats  tc ON tc.id = c.id AND tc.hypercat = 'TRANSPORT'
LEFT JOIN daily_trans tt ON tt.id = t.id AND tt.cat_id = tc.id

LEFT JOIN daily_cats  fc ON fc.id = c.id AND fc.hypercat = 'FOOD'
LEFT JOIN daily_trans ft ON ft.id = t.id AND ft.cat_id = fc.id

LEFT JOIN daily_cats  pc ON pc.id = c.id AND pc.hypercat = 'PURCHASES'
LEFT JOIN daily_trans pt ON pt.id = t.id AND pt.cat_id = pc.id

LEFT JOIN daily_cats  sc ON sc.id = c.id AND sc.hypercat = 'SORTIE'
LEFT JOIN daily_trans st ON st.id = t.id AND st.cat_id = sc.id

LEFT JOIN daily_cats  oc ON oc.id = c.id AND oc.hypercat = 'OTHER'
LEFT JOIN daily_trans ot ON ot.id = t.id AND ot.cat_id = oc.id
GROUP BY month
ORDER BY month DESC