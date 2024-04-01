# mongo-uploader

## Setup Instructions

1. Install [bun](https://bun.sh/):

```
Windows:
powershell -c "irm bun.sh/install.ps1 | iex"

Mac/Linux:
curl -fsSL https://bun.sh/install | bash
```

2. Clone repo and navigate to the root project folder:

```
git clone https://github.com/cdleveille/mongo-uploader
cd mongo-uploader
```

3. Install project dependencies:

```
bun i
```

4. Create a file named `.env` in the root project folder and add a `MONGO_URI` connection string:

```
MONGO_URI=<your-mongo-uri>
```

5. Create a folder named `data` in the root project folder and copy all .json files to be uploaded into this folder (make sure to delete any old .json files from this folder that were already previously uploaded). Folder structure should look like this:

```
mongo-uploader/
  data/
	discord_active_subscription_members.json
	discord_guild_activation.json
	discord_guild_communicators.json
	...
```

6. Run the upload:

```
bun start
```
