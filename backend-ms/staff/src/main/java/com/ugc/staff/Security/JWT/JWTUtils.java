package com.ugc.staff.Security.JWT;

import com.ugc.staff.Security.Services.UserDetailsImpl;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JWTUtils {
    private static final Logger logger = LoggerFactory.getLogger(JWTUtils.class);
    private String JWTSecret = "qwefghnmzxcghjiopwertyuioazikmxcvbnm";
    private int JWTExpirationMs = 86400000;

    public String generateJwtToken(Authentication authentication){
        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();

        return Jwts.builder()
                .setSubject((userPrincipal.getEmail()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + JWTExpirationMs))
                .signWith(SignatureAlgorithm.HS512, JWTSecret)
                .compact();
    }

    public String getUserNameFromJwtToken(String token){
        return Jwts.parser().setSigningKey(JWTSecret).parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateJwtToken(String authToken){
        try {
            Jwts.parser().setSigningKey(JWTSecret).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException e){
            logger.error("Invalid JWT signature: {}", e.getMessage());
        } catch (MalformedJwtException e){
            logger.error("Invalid JWT token: {}", e.getMessage());
        } catch (ExpiredJwtException e){
            logger.error("JWT token is expired: {}", e.getMessage());
        } catch (UnsupportedJwtException e){
            logger.error("JWT token is unsupported: {}", e.getMessage());
        } catch (IllegalArgumentException e){
            logger.error("JWT claims string is empty: {}", e.getMessage());
        }

        return false;
    }

}
