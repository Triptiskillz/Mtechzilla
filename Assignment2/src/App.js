import React, { useState, useEffect } from "react";

function Data() {
  const [name, setName] = useState("");
  const [Username, setUserName] = useState("");
  const [gists, setGists] = useState("");
  const [repos, setRepos] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [userInput, setUserInput] = useState("");
  const [create, setcraete] = useState(null);
//by default
  useEffect(() => { 
    fetch(`https://api.github.com/users/pjhyett`)
      .then((resp) => resp.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  // fetch data form API and store into state
  const setData = ({
    name,
    login,
    public_gists,
    avatar_url,
    public_repos,
    created_at,
  }) => {
    setName(name);
    setUserName(login);
    setGists(public_gists);
    setAvatarUrl(avatar_url);
    setRepos(public_repos);
    setcraete(created_at);
  };
  // enter input
  const searchApiData = (e) => {
    setUserInput(e.target.value);
  };
  // by user serach
  const handleFilter = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
      });
  };
  //   const [users, setUsers] = useState([]);
  //   const[searchApiData,setSearchData] =useState([]);
  //   const [filterVal, setFilterVal] = useState('');
  //   useEffect(() => {
  //     const getUser = async () => {
  //        fetch(`https://api.github.com/users/${userInput}`)
      // .then((resp) => resp.json())
      // .then((data) => {
      //   setData(data);
  //     };
  //     getUser();
  //   }, []);

  //  const handleFilter=(e)=>{
  //     if(e.target.value == ''){
  //         setUsers(searchApiData)
  //     } else{
  //        const filterResult = searchApiData.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase()))
  //          setUsers(filterResult)
  //     }
  //     setFilterVal(e.target.value)
  //  }

  return (
    <>
    {/* search part start */}
      <div className=" pt-8 pb-16">
        <div className="text-center text-gray-600 mb-6 font-medium text-5xl">
          Search
        </div>
        <div className="w-4/5 mx-auto">
          <div className="flex items-center bg-white rounded shadow-md mb-4">
            <span class="px-3">
              <svg
                class="fill-current text-gray-600 w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z" />
              </svg>
            </span>
            <form onSubmit={handleFilter}>
              <input
                className="w-full h-12 focus:outline-none"
                type="text"
                name="Username"
                placeholder="Username"
                onChange={searchApiData}
              />
            </form>
          </div>
        </div>
      </div>
      {/* end part */}
      {/* start card part */}
      <div className="flex items-center justify-center w-screen">
        <div
          class="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          //   key={item.id}
        >
          <div class="flex justify-end px-4 pt-4"></div>
          <div class="flex flex-col items-center pb-10">
            <img
              class="mb-3 w-24 h-24 rounded-full shadow-lg"
              src={avatarUrl}
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {Username}
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">{name}</span>

            <div class="flex mt-4 space-x-2 md:mt-6 inline-flex">
              <a
                href="#"
                class=" items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg "
              >
                No. of public gists <br /><br/>
                <span className="text-xl text-gray-700">{gists}</span>
              </a>
              <a
                href="#"
                class=" items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg "
              >
                No. of public repos <br/><br/>
                <span className="text-xl text-gray-700">{repos}</span>
              </a>
              <a
                href="#"
                class=" items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg  "
              >
                Profile created <br /><br/>
                <span className="text-xl text-gray-700">{create}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* end here */}
    </>
  );
}

export default Data;
