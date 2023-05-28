import React from 'react';

const Uploade1 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const imgbbAPIKey = "e32b2607a3f00cb963832ebb13d8a672";
    // const image = data.file[0];
    const image = file[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result?.data?.url;
          const user = {
            image: img,
          };

          fetch(`https://eventy-server.vercel.app/user-update/${email}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted) {
                reset();
                setFile(null);
                navigate("/manage-profile");
                // toast.success("Profile Picture Updated Successfully");
                SetOpen(false);
              }
            });
        }
      });
  };
  return (
    <div>
      <div class="modal">
                        <div class="modal-box rounded">
                          <form
                            id="profile_photo_upload"
                            onSubmit={handleSubmit(onSubmit)}
                          >
                            <label
                              for="profile_picture"
                              class="btn btn-sm btn-circle bg-red-500 hover:bg-red-600 border-none absolute right-2 top-2"
                            >
                              ✕
                            </label>
                            <div className="mt-10">
                              <FileUploader
                                handleChange={handleChange}
                                multiple={true}
                                name="file"
                                types={fileTypes}
                              />
                              {file && (
                                <p
                                  className={`pt-4 text-sm font-medium text-slate-700`}
                                >
                                  {file &&
                                    `Selected File Name: ${file[0].name}`}
                                </p>
                              )}
                              {!file && (
                                <p
                                  className={`pt-4 text-sm text-red-600 font-medium`}
                                >
                                  {!file && "No File Uploaded Yet !"}
                                </p>
                              )}
                            </div>
                            <div class="modal-action">
                              {file ? (
                                <label for="profile_picture" class="w-full">
                                  <input
                                    className="block w-full bg-blue-700 hover:bg-blue-600 text-white text-center py-2 rounded cursor-pointer"
                                    type="submit"
                                    value="SAVE"
                                  />
                                </label>
                              ) : (
                                <label
                                  aria-disabled
                                  aria-readonly
                                  for=""
                                  class="block w-full bg-blue-200 text-white text-center py-2 rounded"
                                >
                                  SAVE
                                </label>
                              )}
                            </div>
                          </form>
                        </div>
                      </div>
    </div>
  );
};

export default Uploade1;