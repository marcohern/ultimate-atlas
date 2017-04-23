DELETE FROM marcoher_ua_test.daily_trans;
INSERT INTO marcoher_ua_test.daily_trans
   (event_date, cat_id, user_id, type, value, created_at)
SELECT event_date, category_id, 1, mode, value, NOW()
FROM marcoher_daily.trans;
