import pandas as pd
import matplotlib.pyplot as plt

# Load data
df1 = pd.read_csv('/Users/sourabhligade/Downloads/user_balance_202504281725.csv')  # signup users
print(len(df1))
df2 = pd.read_csv('/Users/sourabhligade/Downloads/credit_invoice_202504281736.csv')  # recharges
df3 = pd.read_csv('/Users/sourabhligade/Downloads/user_source_202504281736.csv')     # user source

# Merge source into signup users
df1_with_source = pd.merge(df1, df3, on='user_id', how='left')
print(df1_with_source[:5])

df1_with_source['source'] = df1_with_source['source'].fillna('organic')

# Merge source into recharged users
df2_with_source = pd.merge(df2, df3, on='user_id', how='left')
df2_with_source['source'] = df2_with_source['source'].fillna('organic')

# Only keep organic signups
organic_signups = df1_with_source[df1_with_source['source'] == 'organic']

# Only keep recharged users who are organic
organic_recharged = df2_with_source[
    (df2_with_source['user_id'].isin(organic_signups['user_id'])) & 
    (df2_with_source['machine_id'] == "-1")
]

# Unique counts
organic_signup_count = organic_signups['user_id'].nunique()
organic_recharged_count = organic_recharged['user_id'].nunique()

print(f"Organic signups: {organic_signup_count}")
print(f"Organic recharged users: {organic_recharged_count}")

# Plotting
import numpy as np

data = [organic_signup_count, organic_recharged_count]
labels = ['Organic Signups', 'Organic Recharged users']

plt.figure(figsize=(10, 6))
bars = plt.bar(labels, data, color=['#3498db', '#e74c3c'])

# Add values on top of bars
for bar in bars:
    height = bar.get_height()
    plt.text(bar.get_x() + bar.get_width()/2., height + 0.1,
            f'{int(height)}', ha='center', va='bottom')

plt.title('Organic Total Signups vs Organic Recharged Users')
plt.ylabel('Count')
plt.grid(axis='y', linestyle='--', alpha=0.7)

# Calculate and display percentage
percentage = (organic_recharged_count / organic_signup_count) * 100
plt.figtext(0.5, 0.01, f'Organic recharged users represent {percentage:.2f}% of organic signups', 
            ha='center', fontsize=12)

plt.tight_layout()
plt.show()
