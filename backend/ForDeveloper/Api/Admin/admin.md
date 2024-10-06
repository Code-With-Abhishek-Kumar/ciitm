## API Documentation:

## Example Routes

| Route                  | Description                                                                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/admin/create/albums` | This endpoint allows an administrator to create a new album. It accepts album details through a form-data submission, including the album name, description, and an image file. |
| `/admin/create`        | This route allows administrators to create new resources (e.g., users, posts). Expects a valid payload in the request body and may return errors for validation failures.       |

### Create Album

`Endpoint`

```bash
POST /admin/create/albums
```

### Request

#### Headers

- **Content-Type:** `multipart/form-data`

#### Body Parameters

The request must include the following form-data parameters:

| Parameter          | Type   | Description                              | Required |
| ------------------ | ------ | ---------------------------------------- | -------- |
| `albumName`        | String | The name of the album.                   | Yes      |
| `albumDescription` | String | A brief description of the album.        | Yes      |
| `albumImage`       | File   | An image file associated with the album. | Yes      |

### Create Image Inside Album

`Endpoint`

```bash
POST /admin/create/image
```

### Request

#### Headers

- **Content-Type:** `multipart/form-data`

#### Body Parameters

The request must include the following form-data parameters:

| Parameter          | Type   | Description                              | Required |
| ------------------ | ------ | ---------------------------------------- | -------- |
| `albumName`        | String | The name of the album.                   | Yes      |
| `imageName`        | String | The title of the image.                  | No       |
| `imageDescription` | String | A brief Description of image.            | No       |
| `imageFile`        | File   | An image file associated with the Image. | Yes      |
