# Macro-event-based-stock-market-prediction
According to [Zacks Investment Research](https://finance.zacks.com/factors-affect-stock-market-2405.html), the stock market could be affected by the following factors
1. Macro-economic factors: Inflation rate, unemployment and exchange rates
2. Natural and man-made disasters
3. Market Psychology
4. Politics

These macro-events help us better understand the market fluctuations and potentially help predict these fluctuations even before they become available on news sites like Thomson Reuters.
In this product, we aim to predict the impact of the above-listed macro-events on the stock price and use this impact prediction to predict the stock price with better accuracy. 

![overallFlow](https://user-images.githubusercontent.com/55213734/109114988-64d62200-770c-11eb-9d1f-318bd1738655.JPG)

This product includes 2 levels of predictions
1.	Sentiment Impact Analysis: Prediction of the type of impact of Reddit posts on Adj Close price.
2.	Regression Prediction: using the sentiment impact prediction and other macro-event capturing features to predict the Adj Close price.

## Dataset
We are using the Dow Jones Industrial Average stock price for sentiment impact analysis and stock price prediction for demonstration. The features used include:
1. [Top 25 posts on Reddit](https://www.kaggle.com/aaron7sun/stocknews): selected based on how ‘hot’ they are. Sentiment analysis of these posts will help capture the market psychology and politics. Thus, capturing any drifts in the public mindset.
2. [Natural calamities](https://en.wikipedia.org/wiki/List_of_natural_disasters_in_the_United_States): These have economic consequences impacting the stock market. Includes: wildfire, hurricane, flood, blizzard, snowstorm, tornado
3. [Pandemic](https://www.kaggle.com/sudalairajkumar/covid19-in-usa) : Outbreaks always tend to have a negative effect on the market. For this demonstration, we have added Coronavirus, which could be enriched for 2020 and 2021 to be automatically picked in model training and testing.
4. [Annual Inflation Rate in USA](https://www.usinflationcalculator.com/inflation/current-inflation-rates/): was added to capture the macro-economic factors that influence the stock market.
5. [Season of the year](https://finance.zacks.com/seasonal-stock-market-trends-5830.html): to predict how seasonal stock market trends.

## Sentiment Impact Analysis
![sentimentImpactPrediction](https://user-images.githubusercontent.com/55213734/109115235-c4ccc880-770c-11eb-9a9d-4e337b5a01fc.JPG)
###	Data preprocessing
+	Cleaning dataset of any null values
+	Adding label depicting a change in Adj Close price as binary data
+	Cleaning text of any contractions
+	Tokenizing the text for model training
###	Model Training
+	XGBoost Classifier
+	RandomForest Classifier
+	SGD Classifier
+	Hard Voting Classifier, which gives final prediction based on the prediction probability of other models.
###	Model optimization
+	Bayesian Optimization for Voting Classifier
###	Accuracy Measures for comparison
+	Confusion matrix and f2-score

## Regression Prediction
![regressionPrediction](https://user-images.githubusercontent.com/55213734/109115246-c9917c80-770c-11eb-9050-ae8b8b1fa9a2.JPG)
###	Data Preprocessing
+	Cleaning the dataset of any null values
+	Dropping unwanted fields
+	Preserving the datatypes of features
###	Feature Engineering
+	Label encoding of calamities
+	One-hot encoding of seasons
+	Normalizing dataset using MinMax Scaler
###	Model Training
+	LSTM model layers
+	Added dropout layers to ensure regularization
###	Accuracy matrix
+	Root Mean Square Error (RMSE)
+	Mean Absolute Error (MAE)

### Predicted Stock Price Vs Actual Stock Price
![Prediction](https://user-images.githubusercontent.com/55213734/109115604-4de3ff80-770d-11eb-8808-9207525413b5.jpg)
