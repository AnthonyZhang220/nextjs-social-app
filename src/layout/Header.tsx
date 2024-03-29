"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import Dropdown from "../components/Dropdown";
import Avatar from "../components/Avatar";
import Searchbar from "../components/Searchbar";
import SearchIcon from "@mui/icons-material/Search";
import Button from "../components/Button";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import styles from "../styles/sass/layout/Header.module.scss";

export default function Header({ ...props }) {
	const { session } = props;
	const pathname = usePathname();
	const router = useRouter();

	return (
		<header className={styles.header}>
			<div className={styles.header_container}>
				<nav className={styles.navbar}>
					<div className={styles.navbar_link}>
						<Link href="/">
							<img
								src="/static/logo/Moment-logos_white.png"
								width="50px"
								height="auto"
							/>
						</Link>
						<Link href="/home">Home</Link>
						<div className={styles.navbar_search}>
							<Searchbar
								Icon={<SearchIcon />}
								lineHeight={0.2}
								value="Search"
								borderRadius={14}
								backgroundColor="#"
								htmlFor="search"
								name="search"
								padding="10px 10px 10px 10px"
								placeholder="Search"
							/>
						</div>
					</div>
					<div className={styles.navbar_button}>
						<div className={styles.notification}>
							{pathname === "/notifications" ? (
								<NotificationsRoundedIcon onClick={() => router.back()} />
							) : (
								<Link href="/notifications">
									<NotificationsOutlinedIcon />
								</Link>
							)}
						</div>
						{session ? (
							<div className={styles.navbar_profile_avatar}>
								<Dropdown
									element={
										<Avatar
											avatar_src={session.user?.image ?? undefined}
											size={40}
											alt={session.user?.name ?? undefined}
										/>
									}
								>
									<Link href="/logout">Logout</Link>
								</Dropdown>
							</div>
						) : (
							<>
								<div className={styles.navbar_signup}>
									<Link href="/login">
										<Button
											label="Login"
											color="#121314"
											bgColor="#ffffff"
											radius={10}
											paddingX={10}
											paddingY={5}
										/>
									</Link>
								</div>
								<div className={styles.navbar_login}>
									<Link href="/signup">
										<Button
											label="Sign Up"
											color="#ffffff"
											bgColor="#1d9bf0"
											radius={10}
											paddingX={10}
											paddingY={5}
										/>
									</Link>
								</div>
							</>
						)}
					</div>
				</nav>
			</div>
		</header>
	);
}
