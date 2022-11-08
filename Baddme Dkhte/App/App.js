{
  /* <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Stats />} />
            <Route path="all-jobs" element={<AllJobs />} />
            <Route path="add-job" element={<AddJob />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/landing" element={<Landing />} />
          <Route
            path="/register"
            element={user ? <Navigate to="/" replace /> : <Register />}
          />
          {/* <Route path="/register" element={<Register />} /> */
}
// <Route path="*" element={<Error />} />
//   </Routes>
//   <ToastContainer />
// </BrowserRouter>
// </div>

