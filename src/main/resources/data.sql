-- Insert Customer
INSERT INTO CUSTOMER(CUSTOMER_ID,CUSTOMER_NAME,ADDRESS, PHONE_NUMBER, EMAIL_ADDRESS,IS_ACTIVE,IS_DELETED,CREATED_DATE)
VALUES(1,'ABC','Metro Road Bangalore','987654321','abc@gmail.com',True,False,CURRENT_DATE);

-- Insert Category
INSERT INTO CATEGORY VALUES(1,'Fashion');
INSERT INTO CATEGORY VALUES(2,'Gadgets');
INSERT INTO CATEGORY VALUES(3,'Electronics');
INSERT INTO CATEGORY VALUES(4,'Smart Devices');

-- Insert Product
INSERT INTO PRODUCT(PRODUCT_ID, PRODUCT_NAME,PRODUCT_DESCRIPTION, CATEGORY_ID,PRICE,SHIPPING_PRICE,STYLE,
COLOR, CURRENCY_FORMAT, IS_ACTIVE,IS_DELETED,CREATED_DATE,IMAGEURL)
VALUES(1, 'Cat Tee Black T-Shirt','4 MSL',1, 599,60,'Black with custom print','Black','INR',True,False,
CURRENT_DATE,'http://media.istockphoto.com/photos/smiling-young-man-in-blank-black-tshirt-picture-id464946525?k=6&m=464946525&s=612x612&w=0&h=KAjCFoJGDcFcx8R33Tq1vzqbfixh1XwGpFeiRNoTkRQ=');

INSERT INTO PRODUCT(PRODUCT_ID, PRODUCT_NAME,PRODUCT_DESCRIPTION,CATEGORY_ID, PRICE,SHIPPING_PRICE,STYLE,
COLOR, CURRENCY_FORMAT, IS_ACTIVE,IS_DELETED,CREATED_DATE,IMAGEURL)
VALUES(2, 'Man Grey Tanktop','Grey Tanktop',1, 499,49,'Front print and paisley print','Grey','INR',True,False,
 CURRENT_DATE,'http://media.istockphoto.com/photos/portrait-of-young-man-wearing-tshirt-picture-id465207699?k=6&m=465207699&s=612x612&w=0&h=wSacC0bmcrekig1DW8lOwH7y3X0e4R9266-TuivVQJA=');

INSERT INTO PRODUCT(PRODUCT_ID, PRODUCT_NAME,PRODUCT_DESCRIPTION,CATEGORY_ID, PRICE,SHIPPING_PRICE,STYLE,
COLOR, CURRENCY_FORMAT, IS_ACTIVE,IS_DELETED,CREATED_DATE,IMAGEURL)
VALUES(3, 'Man Brown Shirt','Brown Shirt',1, 499,49,'Front print and paisley print','Brown','INR',True,False,
 CURRENT_DATE,'http://media.istockphoto.com/photos/young-man-looks-to-the-side-picture-id184616842?k=6&m=184616842&s=612x612&w=0&h=SmtsffRByKDH4_HtzGY8bWvHgH8o_4epWVPogvfJXnk=');

INSERT INTO PRODUCT(PRODUCT_ID, PRODUCT_NAME,PRODUCT_DESCRIPTION,CATEGORY_ID, PRICE,SHIPPING_PRICE,STYLE,
COLOR, CURRENCY_FORMAT, IS_ACTIVE,IS_DELETED,CREATED_DATE,IMAGEURL)
VALUES(4, 'Man White Shirt','White Shirt for Men',1, 799,0,'Front print and paisley print','White','INR',True,False,
 CURRENT_DATE,'http://media.istockphoto.com/photos/young-man-wearing-a-white-shirt-picture-id465331977?k=6&m=465331977&s=612x612&w=0&h=-K3c5eE2dZGmg6d5BrBfxOvcHRP7PwHrylyjuEVjbZo=');

INSERT INTO PRODUCT(PRODUCT_ID, PRODUCT_NAME,PRODUCT_DESCRIPTION,CATEGORY_ID, PRICE,SHIPPING_PRICE,STYLE,
COLOR, CURRENCY_FORMAT, IS_ACTIVE,IS_DELETED,CREATED_DATE,IMAGEURL)
VALUES(5, 'Man Black Tie','Black tie for Men',1, 1099,0,'Front print and paisley print','Black','INR',True,False,
 CURRENT_DATE,'http://www.theethicalman.com/uploads/4/8/0/0/4800645/3035404_orig.png');

 INSERT INTO PRODUCT(PRODUCT_ID, PRODUCT_NAME,PRODUCT_DESCRIPTION,CATEGORY_ID, PRICE,SHIPPING_PRICE,STYLE,
COLOR, CURRENCY_FORMAT, IS_ACTIVE,IS_DELETED,CREATED_DATE,IMAGEURL)
VALUES(6, 'Black Shirt Men','Black Shirt for Men',1, 1499,0,'Front print and paisley print','Black','INR',True,False,
 CURRENT_DATE,'http://media.istockphoto.com/photos/smiling-man-in-a-black-t-shirt-picture-id520883622?k=6&m=520883622&s=612x612&w=0&h=XuxfQE0EOo_uWqA8SzNJvZ9Vn-sKR_cT4J9GRIudE4U=');

INSERT INTO PRODUCT(PRODUCT_ID, PRODUCT_NAME,PRODUCT_DESCRIPTION,CATEGORY_ID, PRICE,SHIPPING_PRICE,STYLE,
COLOR, CURRENCY_FORMAT, IS_ACTIVE,IS_DELETED,CREATED_DATE,IMAGEURL)
VALUES(7, 'Man Black Tie','Black tie for Men',1, 1299,0,'Front print and paisley print','Black','INR',True,False,
 CURRENT_DATE,'http://static.becomegorgeous.com/img/articles/what_does_your_mans_tie_tell_about_his_personality_.jpg');

INSERT INTO PRODUCT(PRODUCT_ID, PRODUCT_NAME,PRODUCT_DESCRIPTION,CATEGORY_ID, PRICE,SHIPPING_PRICE,STYLE,
COLOR, CURRENCY_FORMAT, IS_ACTIVE,IS_DELETED,CREATED_DATE,IMAGEURL)
VALUES(8, 'Brown Shirt','Brown T-Shirt for Women',1, 1199,0,'Front print and paisley print','Black','INR',True,False,
 CURRENT_DATE,'https://image.ibb.co/kOhL6k/img1.jpg');

 INSERT INTO PRODUCT(PRODUCT_ID, PRODUCT_NAME,PRODUCT_DESCRIPTION,CATEGORY_ID, PRICE,SHIPPING_PRICE,STYLE,
COLOR, CURRENCY_FORMAT, IS_ACTIVE,IS_DELETED,CREATED_DATE,IMAGEURL)
VALUES(9, 'Light Brown Shirt','Light Brown Shirt for Women',1, 899,0,'Front print and paisley print','Black','INR',True,False,
 CURRENT_DATE,'https://image.ibb.co/nNmKz5/img2.jpg');

INSERT INTO PRODUCT(PRODUCT_ID, PRODUCT_NAME,PRODUCT_DESCRIPTION,CATEGORY_ID, PRICE,SHIPPING_PRICE,STYLE,
COLOR, CURRENCY_FORMAT, IS_ACTIVE,IS_DELETED,CREATED_DATE,IMAGEURL)
VALUES(10, 'Women Grey Shirt','Grey Shirt for Women',1, 1199,0,'Front print and paisley print','Black','INR',True,False,
 CURRENT_DATE,'https://image.ibb.co/n6iMCQ/img3.jpg');

 INSERT INTO PRODUCT(PRODUCT_ID, PRODUCT_NAME,PRODUCT_DESCRIPTION,CATEGORY_ID, PRICE,SHIPPING_PRICE,STYLE,
COLOR, CURRENCY_FORMAT, IS_ACTIVE,IS_DELETED,CREATED_DATE,IMAGEURL)
VALUES(11, 'Warm Shirt Women','Woolen Hoodie Women',1, 1499,0,'Front print and paisley print','Black','INR',True,False,
 CURRENT_DATE,'https://image.ibb.co/dVfORk/img4.jpg');

 INSERT INTO PRODUCT(PRODUCT_ID, PRODUCT_NAME,PRODUCT_DESCRIPTION,CATEGORY_ID, PRICE,SHIPPING_PRICE,STYLE,
COLOR, CURRENCY_FORMAT, IS_ACTIVE,IS_DELETED,CREATED_DATE,IMAGEURL)
VALUES(12, 'Women Red/Brown Shirt','Red/Brown Blouse for Women',1, 1299,0,'Front print and paisley print','Black','INR',True,False,
 CURRENT_DATE,'https://image.ibb.co/mJppz5/img6.jpg');

  INSERT INTO PRODUCT(PRODUCT_ID, PRODUCT_NAME,PRODUCT_DESCRIPTION,CATEGORY_ID, PRICE,SHIPPING_PRICE,STYLE,
COLOR, CURRENCY_FORMAT, IS_ACTIVE,IS_DELETED,CREATED_DATE,IMAGEURL)
VALUES(13, 'White Shirt Women','White Shirt for Women',1, 999,0,'Front print and paisley print','Black','INR',True,False,
 CURRENT_DATE,'https://image.ibb.co/dyCysQ/img8.jpg');

  INSERT INTO PRODUCT(PRODUCT_ID, PRODUCT_NAME,PRODUCT_DESCRIPTION,CATEGORY_ID, PRICE,SHIPPING_PRICE,STYLE,
COLOR, CURRENCY_FORMAT, IS_ACTIVE,IS_DELETED,CREATED_DATE,IMAGEURL)
VALUES(14, 'Black Shirt Women','Black Shirt for Women',1, 1299,0,'Front print and paisley print','Black','INR',True,False,
 CURRENT_DATE,'https://image.ibb.co/eOYre5/img10.jpg');


-- Insert into Cart
INSERT INTO CART(ID, CUSTOMER_ID,IS_ACTIVE,IS_DELETED,CREATED_DATE, TOTAL_PRICE)
VALUES (1, 1, True, False, CURRENT_DATE, 0);