const initDbApi = require("./api/db_api");

export async function handler(event, context, callback) {
  const api = await initDbApi();
  const body = JSON.parse(event.body);
  console.log(`email: ${body.user.email}`);
  console.log(`name:  ${body.user.user_metadata.name}`);

  // TODO: upsert new user

  console.log('upsert new user', { body, api: !!api });

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: "Login succeeded" })
  });
}
