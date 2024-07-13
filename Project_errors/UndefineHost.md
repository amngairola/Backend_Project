#ERROR: connection error : TypeError: Cannot read properties of
undefined (reading 'host')

cause:

```
const connectionInstance = mongoose.connect(
`${process.env.MONGODB_URL}/${DB_NAME}`
);
```

resolve:

```
const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );

```
