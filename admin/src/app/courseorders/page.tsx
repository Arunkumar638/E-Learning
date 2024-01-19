'use client'

import Script from "next/script";
import type {
  ColumnsType,
  ColumnType,
} from "antd/es/table";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { Input, Space, type InputRef, Button, Table } from "antd";
import type { SorterResult, FilterConfirmProps } from "antd/es/table/interface";
import Sidebar from "@/components/sideBar";
import { useEffect, useRef, useState } from "react";
import { getPurchaseCourse, updateCourseStatus } from "@/actions/otherActions";

type DataIndex = keyof DataType;
interface DataType {
  name:string;
  email:string;
  coursetitle: string;
  type: string;
  status:string;
}

const Courses = () =>{
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [courses, setCourses] = useState([]);
    const [purchaseId, setPurchaseId] = useState("")
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef<InputRef>(null);
    const router = useRouter();
    const handleSearch = (
      selectedKeys: string[],
      confirm: (param?: FilterConfirmProps) => void,
      dataIndex: DataIndex
    ) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
  
    const handleReset = (clearFilters: () => void) => {
      clearFilters();
      setSearchText("");
    };
    const scrollConfig = {
      x: 'max-content', 
      y: 400, 
     
    };
    const activate = (data:any) =>{
      const id = data._id;
      router.push(`/vieworder?=${purchaseId}`)
      localStorage.setItem('courseId',id)
    }
    const getColumnSearchProps = (
      dataIndex: DataIndex
    ): ColumnType<DataType> => ({
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        close,
      }) => (
        <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) =>
              setSelectedKeys(e.target.value ? [e.target.value] : [])
            }
            onPressEnter={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            style={{ marginBottom: 8, display: "block" }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() =>
                handleSearch(selectedKeys as string[], confirm, dataIndex)
              }
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button
              onClick={() => clearFilters && handleReset(clearFilters)}
              size="small"
              style={{ width: 60 }}
            >
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({ closeDropdown: false });
                setSearchText((selectedKeys as string[])[0]);
                setSearchedColumn(dataIndex);
              }}
            >
              Filter
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                close();
              }}
            >
              close
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
      ),
      onFilter: (value, record) =>
        record[dataIndex]
          .toString()
          .toLowerCase()
          .includes((value as string).toLowerCase()),
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: (text) =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ""}
          />
        ) : (
          text
        ),
    });
  
    const columns: ColumnsType<DataType> = [
      {
        title: "Username",
        dataIndex: "name",
        key: "name",
        width: "17%",
        ...getColumnSearchProps("name"),
        sorter: (a, b) => a.name.length - b.name.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        width: "15%",
        ...getColumnSearchProps("email"),
        sorter: (a, b) => a.email.length - b.email.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Course Title",
        dataIndex: "coursetitle",
        key: "coursetitle",
        width: "30%",
        ...getColumnSearchProps("coursetitle"),
        sorter: (a, b) => a.coursetitle.length - b.coursetitle.length,
        sortDirections: ["descend", "ascend"],
      },
      {
        title: "Type",
        key: "type",
        dataIndex: "type",
        width: "13%",
        sorter: (a, b) => a.type.length - b.type.length,
        sortDirections: ["descend", "ascend"],
        ...getColumnSearchProps("type"),
      },
        {
          title: 'Action',
          key: 'action',
          render: (details, record) => (
            <Space size="middle">
              <Button type="primary" onClick={()=>{activate(record)}}>View</Button>
              </Space>
          ),
        },
      {
        title: "Status",
        key: "status",
        dataIndex: "status",
        ...getColumnSearchProps("status"),
      },
    ];
  
    const data: DataType[] = courses;
    const notifyError = (data: any) => {
      toast.error(data.message);
    };
  
    useEffect(() => {
      setLoading(true);
      getPurchaseCourse()
        .then((data) => {
          if (data.status == true) {
            setCourses(data.data.details['purchase']);
            setPurchaseId(data.data.id);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
            const message = error.response.data;
            console.log(message);
            console.log("Response data:", error.response.data);
            console.log("Response status:", error.response.status);
            notifyError(message);
          }
        });
    }, []);
    return(
        <>
        <meta charSet="utf-8" />
        <title>Create Course | Steex - Admin &amp; Dashboard Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="Minimal Admin & Dashboard Template" name="description" />
        <meta content="Themesbrand" name="author" />
        {/* App favicon */}
        <link rel="shortcut icon" href="assets/images/favicon.ico" />
        {/* Fonts css load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link id="fontsLink" href="assets/css/font.min.css" rel="stylesheet" />
        {/* dropzone css */}
        <link rel="stylesheet" href="assets/css/dropzone.css" type="text/css" />
  
        {/* Bootstrap Css */}
        <link
          href="assets/css/bootstrap.min.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* Icons Css */}
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link
          href="assets/css/fontawesome.min.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* App Css*/}
        <link href="assets/css/app.min.css" rel="stylesheet" type="text/css" />
        {/* custom Css*/}
        <link href="assets/css/custom.min.css" rel="stylesheet" type="text/css" />
  
        <div id="layout-wrapper">
          <header id="page-topbar">
            <div className="layout-width">
              <div className="navbar-header">
                <div className="d-flex">
                  {/* LOGO */}
                  <div className="navbar-brand-box horizontal-logo">
                    <a href="index" className="logo logo-dark">
                      <span className="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="" height={22} />
                      </span>
                      <span className="logo-lg">
                        <img
                          src="assets/images/logo-dark.png"
                          alt=""
                          height={22}
                        />
                      </span>
                    </a>
                    <a href="index" className="logo logo-light">
                      <span className="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="" height={22} />
                      </span>
                      <span className="logo-lg">
                        <img
                          src="assets/images/logo-light.png"
                          alt=""
                          height={22}
                        />
                      </span>
                    </a>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger shadow-none"
                    id="topnav-hamburger-icon"
                  >
                    <span className="hamburger-icon">
                      <span />
                      <span />
                      <span />
                    </span>
                  </button>
                  <form className="app-search d-none d-md-inline-flex">
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        autoComplete="off"
                        id="search-options"
                        defaultValue=""
                      />
                      <span className="mdi mdi-magnify search-widget-icon" />
                      <span
                        className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
                        id="search-close-options"
                      />
                    </div>
                    <div
                      className="dropdown-menu dropdown-menu-lg"
                      id="search-dropdown"
                    >
                      <div data-simplebar="" style={{ maxHeight: 320 }}>
                        {/* item*/}
                        <div className="dropdown-header">
                          <h6 className="text-overflow text-muted mb-0 text-uppercase">
                            Recent Searches
                          </h6>
                        </div>
                        <div className="dropdown-item bg-transparent text-wrap">
                          <a
                            href="index"
                            className="btn btn-subtle-secondary btn-sm btn-rounded"
                          >
                            how to setup <i className="mdi mdi-magnify ms-1" />
                          </a>
                          <a
                            href="index"
                            className="btn btn-subtle-secondary btn-sm btn-rounded"
                          >
                            buttons <i className="mdi mdi-magnify ms-1" />
                          </a>
                        </div>
                        {/* item*/}
                        <div className="dropdown-header mt-2">
                          <h6 className="text-overflow text-muted mb-1 text-uppercase">
                            Pages
                          </h6>
                        </div>
                        {/* item*/}
                        <a href="" className="dropdown-item notify-item">
                          <i className="ri-bubble-chart-line align-middle fs-18 text-muted me-2" />
                          <span>Analytics Dashboard</span>
                        </a>
                        {/* item*/}
                        <a href="" className="dropdown-item notify-item">
                          <i className="ri-lifebuoy-line align-middle fs-18 text-muted me-2" />
                          <span>Help Center</span>
                        </a>
                        {/* item*/}
                        <a href="" className="dropdown-item notify-item">
                          <i className="ri-user-settings-line align-middle fs-18 text-muted me-2" />
                          <span>My account settings</span>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="d-flex align-items-center">
                  <div className="dropdown ms-sm-3 header-item topbar-user">
                    <button
                      type="button"
                      className="btn shadow-none"
                      id="page-header-user-dropdown"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="d-flex align-items-center">
                        <img
                          className="rounded-circle header-profile-user"
                          src="assets/images/users/32/avatar-1.jpg"
                          alt="Header Avatar"
                        />
                        <span className="text-start ms-xl-2">
                          <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                            Richard Marshall
                          </span>
                          <span className="d-none d-xl-block ms-1 fs-sm user-name-sub-text">
                            Founder
                          </span>
                        </span>
                      </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end">
                      {/* item*/}
                      <h6 className="dropdown-header">Welcome Richard!</h6>
                      <a className="dropdown-item" href="pages-profile">
                        <i className="mdi mdi-account-circle text-muted fs-lg align-middle me-1" />{" "}
                        <span className="align-middle">Profile</span>
                      </a>
                      <a className="dropdown-item" href="apps-chat">
                        <i className="mdi mdi-message-text-outline text-muted fs-lg align-middle me-1" />{" "}
                        <span className="align-middle">Messages</span>
                      </a>
                      <a className="dropdown-item" href="apps-tickets-overview">
                        <i className="mdi mdi-calendar-check-outline text-muted fs-lg align-middle me-1" />{" "}
                        <span className="align-middle">Taskboard</span>
                      </a>
                      <a className="dropdown-item" href="pages-faqs">
                        <i className="mdi mdi-lifebuoy text-muted fs-lg align-middle me-1" />{" "}
                        <span className="align-middle">Help</span>
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="pages-profile">
                        <i className="mdi mdi-wallet text-muted fs-lg align-middle me-1" />{" "}
                        <span className="align-middle">
                          Balance : <b>$8451.36</b>
                        </span>
                      </a>
                      <a className="dropdown-item" href="pages-profile-settings">
                        <span className="badge bg-success-subtle text-success mt-1 float-end">
                          New
                        </span>
                        <i className="mdi mdi-cog-outline text-muted fs-lg align-middle me-1" />{" "}
                        <span className="align-middle">Settings</span>
                      </a>
                      <a className="dropdown-item" href="auth-lockscreen">
                        <i className="mdi mdi-lock text-muted fs-lg align-middle me-1" />{" "}
                        <span className="align-middle">Lock screen</span>
                      </a>
                      <a className="dropdown-item" href="auth-logout">
                        <i className="mdi mdi-logout text-muted fs-lg align-middle me-1" />{" "}
                        <span className="align-middle" data-key="t-logout">
                          Logout
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* /.modal */}
          {/* removeCartModal */}
          <div
            id="removeCartModal"
            className="modal fade zoomIn"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    id="close-cartmodal"
                  />
                </div>
                <div className="modal-body p-md-5">
                  <div className="text-center">
                    <div className="text-danger">
                      <i className="bi bi-trash display-5" />
                    </div>
                    <div className="mt-4">
                      <h4>Are you sure ?</h4>
                      <p className="text-muted mx-4 mb-0">
                        Are you sure you want to remove this product ?
                      </p>
                    </div>
                  </div>
                  <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                    <button
                      type="button"
                      className="btn w-sm btn-light"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn w-sm btn-danger"
                      id="remove-cartproduct"
                    >
                      Yes, Delete It!
                    </button>
                  </div>
                </div>
              </div>
              {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
          </div>
          {/* /.modal */}
          {/* ========== App Menu ========== */}
          <Sidebar page="courseorder" />
          {/* Left Sidebar End */}
          {/* Vertical Overlay*/}
          <div className="vertical-overlay" />
          <div className="main-content">
            <div className="page-content">
              <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                      <h4 className="mb-sm-0">Course Orders</h4>
                      <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                          <li className="breadcrumb-item">
                            <a href="">Course Orders</a>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end page title */}
                <div className="row">
                  <div className="col-xl-12">
                    <div className="card">
                      <div className="card-header">
                        <h5>Course Orders</h5>
                      </div>
                      <Toaster position="top-right" expand={true} richColors />
                      <div className="card-body form-steps">
                        <Table
                          columns={columns}
                          dataSource={data}
                          loading={loading}
                          scroll={scrollConfig}
                        />
                      </div>
                      {/* end card body */}
                    </div>
                    {/* end card */}
                  </div>
                  {/* end col */}
                </div>
              </div>
              {/* container-fluid */}
            </div>
            {/* End Page-content */}
            <footer className="footer">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-6">© Steex.</div>
                  <div className="col-sm-6">
                    <div className="text-sm-end d-none d-sm-block">
                      Design &amp; Develop by Themesbrand
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          {/* end main content*/}
        </div>
        {/* END layout-wrapper */}
        {/*start back-to-top*/}
        <button className="btn btn-dark btn-icon" id="back-to-top">
          <i className="bi bi-caret-up fs-3xl" />
        </button>
        {/*end back-to-top*/}
        {/*preloader*/}
        <div id="preloader">
          <div id="status">
            <div className="spinner-border text-primary avatar-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
  
        <Script src="assets/js/bootstrap.bundle.min.js"></Script>
        <Script src="assets/js/simplebar.min.js"></Script>
        <Script src="assets/js/plugins.js"></Script>
        <Script src="assets/js/layout.js"></Script>
        <Script src="assets/js/ckeditor.js"></Script>
        <Script src="assets/js/dropzone-min.js"></Script>
        <Script src="assets/js/form-editor.init.js"></Script>
        <Script src="assets/js/form-wizard.init.js"></Script>
        <Script src="assets/js/app.js"></Script>
      </>
    )
}

export default Courses;