/**
 * hooks for fetching all tasks
 * hoosks filtering task without one changed state by id 
 * send the data to the task page from the global 
 * 
 * ---------------
 * workspace
 * ---------------
 * Change the tasks based on the active workspace 
 * validate is user member or admin of the specific workspace 
 * Add a option to "add member" where all memebers in user db will be show in a list
 * When click on a specific workspace take workspace id and the user email going to become a member of thet workspace 
 * 
 * 
 * ----------------
 * Add member 
 * ----------------
 * 
 * create backend api for adding member 
 * check is the email is valid
 * once recieve find the workspace and push the email to the wokspace member array. 
 * 
 * Design plus icon to add new member 
 * fetch the all the some user and display list to add 
 * based on selection request to database to recieve that member email and workspace id 
 * 
 * ------------------------------------------
 * active workspace name display
 * ------------------------------------------
 * send 
 * 
 * 
 * 
 * 
 * 
 * 
 



 */

/*


   <ul className="divide-y ">
          {userArray?.map((user) => (
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0 bg-gray-200 h-7 w-8 rounded-full">
              
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                      {user?.name}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      {user?.email}
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      handleAddMember(clickedWorkspaceId, user?.email, user?.name)
                    }
                    className="text-[13px] inline-flex cursor-pointer items-center text-gray-900 "
                  >
                    +Add
                  </div>
                </div>
              </li>
            ))}
          </ul>





              {/* <Image
                    alt="Neil image"
                    height="32"
                    src="/"
                    width="32"
                    className="rounded-full"
                /> }

*/











