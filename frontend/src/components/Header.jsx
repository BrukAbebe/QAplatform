import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import CustomButton from "../components/Button/CustomButton";

const Header = () => {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => setIsScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const bgColor = isMobile
    ? "#1B1007"
    : location.pathname === "/" && !isScrolled
    ? "transparent"
    : "#1B1007";
  const activeLinkColor = useColorModeValue("#FE8402", "orange.300");
  const inactiveLinkColor = useColorModeValue("white", "gray.200");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Box
      as="header"
      bg={bgColor}
      color="white"
      position="fixed"
      w="100%"
      zIndex="10"
      transition="background-color 0.3s ease"
      py={4}
      px={8}
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        w="100%"
      >
        <Heading as="h1" size="md">
          <Link
            as={RouterLink}
            to="/"
            _hover={{ color: activeLinkColor }}
            color={
              location.pathname === "/" ? activeLinkColor : inactiveLinkColor
            }
          >
            Home
          </Link>
        </Heading>
        <Spacer />
        {isMobile ? (
          <Box ref={menuRef}>
            <IconButton
              icon={isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
              variant="outline"
              aria-label="Menu"
              onClick={toggleMenu}
              bg="#1B1007"
              color="white"
            />
            {isMenuOpen && (
              <Box
                bg="#1B1007"
                color="white"
                position="absolute"
                top="100%"
                left="0"
                right="0"
                p={4}
                zIndex="20"
              >
                <VStack align="start" spacing={4}>
                  {token ? (
                    <>
                      <Link
                        as={RouterLink}
                        to="/questions"
                        _hover={{ color: activeLinkColor }}
                        w="full"
                        fontSize="md"
                        fontWeight="bold"
                        color={
                          location.pathname === "/questions"
                            ? activeLinkColor
                            : inactiveLinkColor
                        }
                      >
                        Questions
                      </Link>
                      <Link
                        as={RouterLink}
                        to="/ask"
                        _hover={{ color: activeLinkColor }}
                        w="full"
                        fontSize="md"
                        fontWeight="bold"
                        color={
                          location.pathname === "/ask"
                            ? activeLinkColor
                            : inactiveLinkColor
                        }
                      >
                        Ask Question
                      </Link>
                      <CustomButton onClick={handleLogout} w="auto">
                        Sign Out
                      </CustomButton>
                    </>
                  ) : (
                    <Link
                      as={RouterLink}
                      to="/signin"
                      _hover={{ color: activeLinkColor }}
                      w="full"
                      fontSize="md"
                      fontWeight="bold"
                      color={
                        location.pathname === "/signin"
                          ? activeLinkColor
                          : inactiveLinkColor
                      }
                    >
                      Sign In
                    </Link>
                  )}
                </VStack>
              </Box>
            )}
          </Box>
        ) : (
          <Flex align="center" wrap="wrap">
            {token ? (
              <>
                <Link
                  as={RouterLink}
                  to="/questions"
                  ml={[2, 4]}
                  fontSize="md"
                  fontWeight="bold"
                  color={
                    location.pathname === "/questions"
                      ? activeLinkColor
                      : inactiveLinkColor
                  }
                  _hover={{ color: activeLinkColor }}
                >
                  Questions
                </Link>
                <Link
                  as={RouterLink}
                  to="/ask"
                  ml={[2, 4]}
                  fontSize="md"
                  fontWeight="bold"
                  color={
                    location.pathname === "/ask"
                      ? activeLinkColor
                      : inactiveLinkColor
                  }
                  _hover={{ color: activeLinkColor }}
                >
                  Ask Question
                </Link>
                <CustomButton onClick={handleLogout} ml={[2, 4]}>
                  Sign Out
                </CustomButton>
              </>
            ) : (
              <Link
                as={RouterLink}
                to="/signin"
                ml={[2, 4]}
                fontSize="md"
                fontWeight="bold"
                color={
                  location.pathname === "/signin"
                    ? activeLinkColor
                    : inactiveLinkColor
                }
                _hover={{ color: activeLinkColor }}
              >
                Sign In
              </Link>
            )}
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
